import moment from 'moment';
import { Card, Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteTaskAsync } from 'store/tasks/tasksSlice';
import { useDispatch } from 'hooks';
import { ITask } from 'typings/interfaces';

interface TaskProps {
  data: ITask;
  onEdit: (task: ITask) => void;
}

const TaskCard: React.FC<TaskProps> = ({ data, onEdit }) => {
  const tagsDisplayLimit = 3;
  const dispatch = useDispatch();
  const tags = data.tags.split(';');
  const displayTags = tags.length > 0 ? data.tags.split(';').splice(0, tagsDisplayLimit) : [];
  console.log({ startDate: data.startDate });
  return (
    <Card
      sx={{ padding: '1rem', backgroundColor: 'Background', width: '100%', minHeight: '200px', maxHeight: '200px' }}
      variant="outlined"
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'center', alignItems: 'center' }}>
        <Typography variant="h6" color="inherit" component="div">
          {data.name || 'No name provided'}
        </Typography>
        <IconButton aria-label="edit" size="medium" onClick={() => onEdit(data)}>
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="medium" onClick={() => dispatch(deleteTaskAsync(data.id))}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Typography variant="body1" color="inherit" component="div" gutterBottom>
        {data.description || 'No description provided'}
      </Typography>
      <Typography variant="body2" color="inherit" component="div">
        Type: {data.type || 'No type provided'}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="inherit" component="div">
          Tags:
        </Typography>

        {displayTags.length > 0
          ? displayTags.map((tag, index) => (
              <Box
                key={index}
                style={{
                  padding: '0rem 0.5rem',
                  margin: '0.1rem 0.1rem',
                  backgroundColor: '#F0F0F0',
                  borderRadius: '0.2rem',
                }}
              >
                <Typography variant="body1" color="inherit" component="div">
                  {tag}
                </Typography>
              </Box>
            ))
          : 'No tags provided'}
        {tags.length > displayTags[0].length && (
          <Box
            style={{
              padding: '0rem 0.4rem',
              margin: '0.1rem 0.1rem',
              backgroundColor: '#F0F0F0',
              borderRadius: '0.2rem',
            }}
          >
            <Typography variant="body2" color="inherit" component="div">
              {`+ ${tags.length - displayTags[0].length} more`}
            </Typography>
          </Box>
        )}
      </Box>
      <Typography variant="body2" color="inherit" component="div">
        Start Date: {moment(data.startDate).fromNow() || 'No start date provided'}
      </Typography>
    </Card>
  );
};

export default TaskCard;
