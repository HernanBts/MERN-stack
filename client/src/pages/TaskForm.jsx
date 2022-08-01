import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskProvider";

function TasksForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const data = await getTask(params.id);
        console.log(data)
        setTask({
          title: data.title,
          description: data.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <h1> { params.id ? "Edit Task:" : "Create Task:" } </h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting })=> (
          <Form onSubmit={handleSubmit}>
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
              { params.id ? "Update" : isSubmitting ? "Saving..." : "Save" }
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
