import {
  Plus,
  Calendar,
  MapPin,
  Settings2,
  CircleCheck,
  UserCog,
  Link2,
  CircleDashed,
} from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all">
            Alterar local/Data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-all">
              <Plus className="size-5" /> Cadastrar Atividade
            </button>
          </div>
          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Reserva do AirBnB</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all">https://www.airbnb.com.br/rooms/10470001146546546546546546546</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Regras da casa</span>
                  <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-all">https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000</a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
            <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all">
              <Plus className="size-5" />
              Cadastrar novo link
            </button>
          </div>
          <div className="w-full h-px bg-zinc-800"></div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Convidados</h2>
            <div className="space-y-5">

            <div className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Jessica White</span>
                  <span className="block text-sm text-zinc-400 truncate ">jessica.white44@yahoo.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Dr. Rita Pacocha</span>
                  <span className="block text-sm text-zinc-400 truncate ">lacy.stiedemann@gmail.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
              </div>
              <div className="flex items-center justify-between gap-4 ">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100 ">Wilfred Dickens III</span>
                  <span className="block text-sm text-zinc-400 truncate ">marian.hyatt@hotmail.com</span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
              </div>
            </div>
            <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-all">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </div>
      </main>

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
