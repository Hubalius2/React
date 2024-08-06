import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject() {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(previousState => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };

      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject],
      }
    });
  }

  function handleCancelProject() {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleSelectProject(id) {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: id,
      }
    });
  }

  function handleDeleteProject(id) {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter(project => project.id !== previousState.selectedProjectId),
      }
    });
  }

  function handelAddTask(task) {
    setProjectsState(previousState => {
      const taskID = Math.random();
      const newTask = {
        task: task,
        projectID: projectsState.selectedProjectId,
        id: taskID,
      };
      return {
        ...previousState,
        tasks: [newTask, ...previousState.tasks],
      }
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(previousState => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter(task => task.id !== id),
      }
    });
  }

  console.log(projectsState);

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handelAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectsState.selectedProjectId}/>
      {/* <NewProject /> */}
      {content}
    </main>
  );
}

export default App;
