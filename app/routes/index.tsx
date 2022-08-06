import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="relative min-h-screen bg-slate-900 sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://pbs.twimg.com/media/EAgBbrVXoAEDcHC?format=jpg&name=medium"
                alt="Foto de um dos encontros"
              />
              <div className="absolute inset-0 bg-[color:rgba(25,204,254,0.2)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Code 4 Tuba
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl font-bold text-white sm:max-w-3xl	">
                Sua comunidade de software em Tubarão
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    to="#comunidade"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-700 shadow-sm hover:bg-blue-50 sm:px-8"
                  >
                    Comunidade
                  </Link>
                  <a
                    href="https://www.meetup.com/pt-BR/code4tuba/"
                    target="_blank"
                    className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600  "
                    rel="noreferrer"
                  >
                    Meetup.com
                  </a>
                </div>
              </div>
              <a
                href="https://github.com/code4tuba"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://github.com/code4tuba.png"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl pt-60 sm:px-6 lg:px-8">
          <div className="relative bg-gray-200 shadow-xl sm:overflow-hidden sm:rounded-2xl ">
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h2
                id="comunidade"
                className="text-center text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="block uppercase text-blue-500 drop-shadow-md">
                  Comunidade
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg pt-20 pb-20 pl-14 pr-14 text-center text-justify indent-8 text-xl text-black sm:max-w-3xl">
                O Code4Tuba é uma comunidade formada em 2017 por um grupo de
                amigos que queriam fomentar o desenvolvimento de software em
                Tubarão e região. Nosso primeiro evento contou com mais de 100
                inscritos, e arrecadamos 110kg de alimentos e 115 litros de
                leite que foram doados para famílias na cidade. Após esse
                primeiro evento, a comunidade se manteve ativa com a realização
                de meetups até a pausa devido a pandemia. Em 2022 estamos de
                volta, com uma nova cara e a mesma vontade, fortalecer o
                desenvolvimento de software na nossa região.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
