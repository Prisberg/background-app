import ActionButtons from './ActionButtons';
import ImageDisplay from './ImageDisplay';
import Selection from './Selection';

/* download knapp, load state+spinner, fast ratio på img display, orientation selection */

function App() {

  return (
    <div className='mt-4  w-full h-full flex justify-center flex-col'>
      <h1 className="text-center text-3xl font-bold">
        WELCOME TO BACKGROUND APP
      </h1>
      <Selection />
      <ActionButtons />
      <ImageDisplay />
    </div >
  );
}

export default App;