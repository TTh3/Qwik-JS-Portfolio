import { component$,useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore({ count: 0 });

  return (
    <div>
      <p>Count: {store.count}</p>
      <p>
        <button onClick$={() => store.count++}>Click</button>
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'What up dawg!',
};
