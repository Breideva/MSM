import { Navbar } from "../../components/navbar";
import "../../styles/Projects/project-pages.css";

export const Third = () => {
  return (
    <>
      <Navbar />
      <div className="main-project-pages">
        <div className="header">
          <h1>Project Name</h1>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, veritatis. Voluptatum animi assumenda ad aut labore,
            amet impedit doloribus eveniet tempora aliquam nihil, at quia
            debitis alias fugiat! Tempore, commodi?
          </h2>
        </div>
        <div className="body">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, veritatis. Voluptatum animi assumenda ad aut labore,
            amet impedit doloribus{" "}
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus, veritatis. Voluptatum animi assumenda ad aut labore,
            amet impedit doloribus{" "}
          </p>
        </div>
      </div>
    </>
  );
};
