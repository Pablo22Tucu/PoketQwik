import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "../components/pokemon/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1);
  const isImageVisible = useSignal(true);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  return (
    <>
      <h1>Noti Tuc</h1>
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} imageVisible={isImageVisible.value} />

      <div class="mt-2">
        <button
          class="btn btn-primary mr-2"
          onClick$={() => changePokemonId(-1)}
        >
          Anterior
        </button>
        <button class="btn btn-primary mr-2" onClick$={() => changePokemonId(+1)}>
          Siguiente
        </button>
        <button
          class="btn btn-primary"
          onClick$={() => (isImageVisible.value = !isImageVisible.value)}
        >
          Revelar
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PoketQwik",
  meta: [
    {
      name: "PoketQwik",
      content: "mi primera app con Qwik",
    },
  ],
};
