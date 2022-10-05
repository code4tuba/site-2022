import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  return redirect("https://www.meetup.com/pt-BR/code4tuba/events/288760664/");
}

export async function loader({ request }: LoaderArgs) {
    return redirect("https://www.meetup.com/pt-BR/code4tuba/events/288760664/");
}
