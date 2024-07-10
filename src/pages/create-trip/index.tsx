import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./modals/invite-guest-modal";
import { ConfirmTripmodal } from "./modals/confirm-trip-modal";
import { DestinationAndDareStep } from "./steps/destination-and-date-step";
import { InviteGuestStep } from "./steps/invite-guests-step";

export function CreateTripPage() {
  const navigate = useNavigate();

  // função para mostrar a segunda linha
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  // função pra mostrar ou ocultar o modal
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  // função pra mostrar ou ocultar o modal de confirmação de viagem
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  // função que lista em ARRAY os emails para convite
  const [emailsToInvite, setEmailsToInvite] = useState([
    "knauer.kar2009@gmail.com",
    "knauer.2009@hotmail.com",
  ]);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }
  function openGuestModal() {
    setIsGuestModalOpen(true);
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }
  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }
  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }
  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }
    if (emailsToInvite.includes(email)) {
      console.log("email ja existente!");
      event.currentTarget.reset();
      return;
    }
    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }
  function removeEmailsFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }
  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate("/trips/123");
  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="Plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
         <DestinationAndDareStep 
         openGuestInput={openGuestInput}
         closeGuestInput={closeGuestInput}
         isGuestInputOpen={isGuestInputOpen}/>

          {isGuestInputOpen && (
            <InviteGuestStep
            emailsToInvite={emailsToInvite}
            openConfirmTripModal={openConfirmTripModal}
            openGuestModal={openGuestModal} 
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestModal={closeGuestModal}
          removeEmailsFromInvites={removeEmailsFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
       <ConfirmTripmodal 
        closeConfirmTripModal={closeConfirmTripModal}
        createTrip = {createTrip}
       />
      )}
      
      <div className="fixed bottom-0 left-0 w-[100%] flex justify-center">
        <p>
          built by <a href="#">Markus Knauer</a> through{" "}
          <a
            className="decoration-none underline font-semibold"
            href="https://app.rocketseat.com.br/"
          >
            RocketSeat
          </a>
        </p>
      </div>
    </div>
  );
}
