import Projects from '/imports/api/collections/Projects';

type Params = {
  name: string
}
export const CreateProject = function ({ name }: Params) {
  const id = Projects.insert({ name });

  return id;
}

export default CreateProject;