import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const programmingLanguages = [
    {
      key: "pl-1",
      name: "React",
      description:
        "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
      image: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    },
    {
      key: "pl-2",
      name: "Angular",
      description:
        "AngularJS is a structural framework for dynamic web apps.It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly.",
      image: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
    },
    {
      key: "pl-3",
      name: "Vue",
      description:
        "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
      image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
    },
  ];
  return (
    <>
      <h1 className="heading">JS Frontend Frameworks</h1>
      {programmingLanguages.map((item) => (
        <ChildComponent
          key={`${item.name}-${item.key}`}
          name={item.name}
          desc={item.description}
          img={item.image}
        />
      ))}
    </>
  );
};

export default ParentComponent;
