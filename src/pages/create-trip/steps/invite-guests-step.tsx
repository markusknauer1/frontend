import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../componentes-do-html/button";

interface InviteGuestStepProps {
  openGuestModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestStep({
  openGuestModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3 transition-all">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1 text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>


      <Button onClick={openConfirmTripModal} variant="primary" size="default">
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
