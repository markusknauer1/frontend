import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../componentes-do-html/button";
import { useParams } from "react-router-dom";
import { FormEvent } from "react";
import { api } from "../../../lib/axios";

interface CreateactivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateactivityModal({
  closeCreateActivityModal,
}: CreateactivityModalProps) {
const {tripId} = useParams()

async function createActivity(event: FormEvent<HTMLFormElement>){
  event.preventDefault()

  const data = new FormData(event.currentTarget)

  const title = data.get('title')?.toString()
  const occurs_at = data.get('occurs_at')?.toString()

  await api.post(`/trips/${tripId}/activities`, {
    title,
    occurs_at
    
  })

  window.document.location.reload()
}

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

        <form onSubmit={createActivity} className="space-y-3">
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
                type="dateTime-local"
                name="occurs_at"
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
