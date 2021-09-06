import Projects from '/imports/api/collections/Projects';
import escapeHtml from '/imports/helpers/escapeHtml';

type Params = {
  name: string
}
export const MethodCreateProject = function (this: any, { name }: Params) {
  const id = Projects.insert({ name: escapeHtml(name), user: this.userId });

  return id;
}

export default MethodCreateProject;
