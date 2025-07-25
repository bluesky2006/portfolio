import ProjectCard from "./ProjectCard";

function Main() {
  return (
    <main className="flex w-[50%] flex-col gap-10 py-24">
      <div className="mt-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit quam vitae
          volutpat pellentesque. Phasellus ullamcorper scelerisque magna, nec tincidunt urna
          vestibulum sed. Suspendisse vitae dolor placerat, aliquam augue id, fermentum orci. Duis
          fringilla nisl nec lorem pulvinar, ut maximus dolor aliquet. Sed nec lectus eu justo
          blandit varius a at dui. Quisque nisl purus, fringilla at elit at, bibendum commodo
          mauris. In hac habitasse platea dictumst. Mauris lacinia aliquam nunc, sit amet fermentum
          mauris pretium a. Donec congue ullamcorper facilisis.
        </p>
        <p>
          Ut dictum odio sed lorem condimentum, sit amet bibendum ante maximus. Duis viverra
          vehicula odio, nec volutpat arcu varius ut. Sed tempor tortor a sem tempus bibendum et et
          lectus. Curabitur libero augue, viverra rutrum est at, fringilla imperdiet nulla. Proin
          consectetur varius purus, quis vehicula nibh faucibus quis. Duis blandit augue in nibh
          mollis, eu cursus magna posuere. Sed tempus, elit eu auctor sollicitudin, diam libero
          convallis tortor, id ullamcorper libero turpis et leo. Nunc ac vestibulum est. Sed eu ante
          ullamcorper nulla pellentesque venenatis et id nisi. Cras efficitur turpis ullamcorper
          nulla lobortis venenatis. Cras efficitur purus ex, ac maximus dui hendrerit id. Morbi
          cursus ex quis mauris placerat scelerisque.
        </p>
      </div>
      <ProjectCard />
    </main>
  );
}

export default Main;
