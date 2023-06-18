import { FC, Fragment } from 'react';
import { Box, Button, Grid } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { StrechedBox } from 'components/atoms';
import { FileUploadDownload, TaskCard } from 'components/molecules';

enum TaskTypeEnum {
  STORY = 'STORY',
  BUG = 'STORY',
}

interface ITask {
  id: string;
  name: string;
  description: string;
  type: TaskTypeEnum;
  startDate: string;
  tags: string;
}

const tasks: ITask[] = [
  {
    id: '1',
    name: 'First Task',
    description: 'This is First Task',
    type: TaskTypeEnum.BUG,
    startDate: '2023-06-18',
    tags: 'tag1;tag2;tag3',
  },
  {
    id: '2',
    name: 'Second Task',
    description: 'This is Second Task',
    type: TaskTypeEnum.STORY,
    startDate: '2023-06-16',
    tags: 'tag1;tag2;tag3',
  },
  {
    id: '3',
    name: 'Third Task',
    description: 'This is Third Task',
    type: TaskTypeEnum.BUG,
    startDate: '2023-05-11',
    tags: 'tag1;tag2;tag3',
  },
  {
    id: '4',
    name: 'Fourth Task',
    description: 'This is Fourth Task',
    type: TaskTypeEnum.STORY,
    startDate: '2023-03-10',
    tags: 'tag1;tag2;tag3',
  },
  {
    id: '5',
    name: 'Five Task',
    description: 'This is Fifth Task',
    type: TaskTypeEnum.BUG,
    startDate: '2023-06-28',
    tags: 'tag1;tag2;tag3',
  },
];

const Tasks: FC = () => {
  return (
    <Fragment>
      <StrechedBox>
        <FileUploadDownload />
        <Box>
          <Button startIcon={<AddBoxIcon />} variant="contained" disableElevation>
            Add Task
          </Button>
        </Box>
      </StrechedBox>

      <Box>
        <Grid container spacing={2}>
          {tasks &&
            tasks.map((task: ITask) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={task.id}>
                <TaskCard data={task} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Tasks;
