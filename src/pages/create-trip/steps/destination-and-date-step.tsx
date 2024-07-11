import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../componentes-do-html/button";

interface DestinationAndDareStepProps{
  isGuestInputOpen: boolean
  openGuestInput: () => void
  closeGuestInput: () => void
}

export function DestinationAndDareStep({
  openGuestInput,
  closeGuestInput,
  isGuestInputOpen

}:DestinationAndDareStepProps){
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
    <div className="flex items-center gap-2 flex-1">
      <MapPin className="size-5 text-zinc-400" />
      <input
        type="text"
        disabled={isGuestInputOpen}
        placeholder="Para onde vc vai?"
        className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
      />
    </div>
    <div className="flex items-center gap-2">
      <Calendar className="size-5 text-zinc-400" />
      <input
        type="text"
        disabled={isGuestInputOpen}
        placeholder="Quando?"
        className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
      />
    </div>
    
    <div className="w-px h-6 bg-zinc-800"/>
    
    {isGuestInputOpen ? (
      
      <Button onClick={closeGuestInput} variant="secondary" size="default">
        Alterar local/Data
        <Settings2 className="size-5" />
      </Button>
    ) : (
      <Button onClick={openGuestInput} variant="primary" size="default">
        Continuar <ArrowRight className="size-5" />{" "}
      </Button>
    )}
  </div>
  )
}