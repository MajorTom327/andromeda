import React from 'react'
import useProject from '/imports/hooks/useProject';
import Loading from '../../components/Loading';
import Container from '../../components/Container';
import Header from '../../components/Header';
import useTasksByProjectId from '../../../hooks/useTasksByProjectId';
import Task from '../../components/Task';
import CreateTaskByProject from '../../forms/CreateTaskByProject';
import withModal from '../../../hoc/withModal';

interface Props {
  projectId: string
}

const Project = ({ projectId }: Props) => {
  const [isReady, project] = useProject(projectId);
  const [isReadyTask, tasks] = useTasksByProjectId(projectId)

  if (!(isReady && isReadyTask)) return <Loading />
  return (
    <Container>
      <Header label={project?.name || ''} />
      <div className="flex flex-col gap-4">
        {tasks.map(task => <Task key={task._id} task={task} />)}
      </div>
    </Container>
  )
}

export default withModal(CreateTaskByProject)(Project)
