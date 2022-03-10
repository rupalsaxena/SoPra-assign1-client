import Header from "components/views/Header";
import AppRouter from "components/routing/routers/AppRouter";

/**
 * Happy coding!
 * React Template by Lucas Pelloni
 * Overhauled by Kyrill Hux and Rupal Saxena
 */
const App = () => {
  return (
    <div>
      <Header height="100"/>
      <AppRouter/>
    </div>
  );
};

export default App;
