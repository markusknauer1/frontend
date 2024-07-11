import { Calendar, Tag, Timer, X } from "lucide-react";
import { Button } from "../../componentes-do-html/button";

interface CreateactivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateactivityModal({
  closeCreateActivityModal,
}: CreateactivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 transition-all flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 rounded-xl py-5 px-6 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950  border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-14 px-4 flex-1 bg-zinc-950  border border-zinc-800 rounded-lg flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="date"
                name="Date"
                placeholder="20 de agosto"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-[100%]"
              />
            </div>
            <div className="h-14 w-44 px-4 bg-zinc-950  border border-zinc-800 rounded-lg flex items-center gap-2">
              <Timer className="text-zinc-400 size-[30px]" />
              <input
                type="time"
                name="Hour"
                placeholder="Horário"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none w-[100%]"
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
