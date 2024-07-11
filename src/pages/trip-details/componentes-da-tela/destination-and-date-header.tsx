import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../componentes-do-html/button";

export function DestinationAndDateHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className=" text-zinc-100 flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400 " />
        <span>Florianópolis, Brasil</span>
      </div>
      <div className=" flex items-center gap-5">
        <div className=" text-zinc-100 flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400 " />
          <span>17 a 23 de Agosto</span>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button variant="secondary">
          Alterar local/Data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
