import { Plus} from "lucide-react";
import { useState } from "react";
import { CreateactivityModal } from "./modals/create-activity-modal";
import { ImportantsLinks } from "./componentes-da-tela/importants-links";
import { Guests } from "./componentes-da-tela/Guests";
import { Activities } from "./componentes-da-tela/activities";
import { DestinationAndDateHeader } from "./componentes-da-tela/destination-and-date-header";
import { Footer } from "../componentes-do-html/footer";

export function TripDetailsPage() {
  const [isCreateactivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function OpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button
              onClick={OpenCreateActivityModal}
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all"
            >
              <Plus className="size-5" /> Cadastrar Atividade
            </button>
          </div>
          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantsLinks />
          <div className="w-full h-px bg-zinc-800"></div>
          <Guests />
        </div>
      </main>

      {isCreateactivityModalOpen && (
        <CreateactivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      <Footer />
    </div>
  );
}
