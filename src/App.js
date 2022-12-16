import Header from "./components/Header";
import Form from "./components/Form";
import { AssignmentProvider } from "./components/Context/AssignmentProvider";
export default function App() {
  
  return (
    <>
    <Header />
    <AssignmentProvider>
      <Form/>
    </AssignmentProvider>
    </>
  );
}

