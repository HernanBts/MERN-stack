import {Formik} from 'formik'
import {createTaskRequest} from '../api/tasks.api'

function TasksForm() {
    return (
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",
          }}
          onSubmit={async (values, actions) => {
            console.log(values);
            try {
              const response = await createTaskRequest(values);
              console.log(response);
              actions.resetForm();
            } catch (error) {
              console.log(error);
            }
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