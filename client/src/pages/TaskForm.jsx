import {Formik} from 'formik'
import { useTasks } from '../context/TaskProvider';

function TasksForm() {
  const {createTask} = useTasks();

    return (
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            createTask(values);
            actions.resetForm();
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Write a Title..."
                onChange={handleChange}
                value={values.title}
              />
              <label>Description</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Write a simple descrpition..."
                onChange={handleChange}
                value={values.description}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
}

export default TasksForm