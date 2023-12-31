import Modal from "./lib/Modal";
import { render } from "react-dom";
import SwitchModal from "./lib/SwitchModal";
import "./lib/Modal.css";

export default function App() 
{
  const { isVisible: isSmallModalVisible, toggle: toggleSmallModal } = SwitchModal();

  const { isVisible: isBigModalVisible, toggle: toggleBigModal } = SwitchModal();

  return (
    <>
      <h1>hrnet-universal-modal</h1>

        <div className="App">
          <button className="modalToggleSmall" onClick={toggleSmallModal}>
            TEST SMALL SIZE
          </button>

          <Modal
            isVisible={isSmallModalVisible}
            hide={toggleSmallModal}
            title="THIS IS A TEST"
            size="small"
          >
            <div className="modalBody">Small modal content example</div>
          </Modal>

          <button className="modalToggleBig" onClick={toggleBigModal}>
            TEST BIG SIZE
          </button>

          <Modal
            isVisible={isBigModalVisible}
            hide={toggleBigModal}
            title="THIS IS A TEST"
            size="big"
          >
            <div className="modalBody">Big modal content example</div>
          </Modal>
        </div>
    </>
  );
};

render(
  <App />, document.getElementById('root')
);

