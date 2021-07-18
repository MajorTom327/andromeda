import Projects from '/imports/api/collections/Projects';

type Params = {
  name: string
}
export const MethodCreateProject = function (this: any, { name }: Params) {
  const id = Projects.insert({ name, user: this.userId });

  return id;
}

export default MethodCreateProject;