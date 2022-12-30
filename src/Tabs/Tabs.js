import "./Tabs.css"
import Board from "./Board/Board";
import { stores } from "../Store/Store";
import { observer } from "mobx-react-lite";
import  {IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoIosRemoveCircleOutline} from 'react-icons/io'

function Tabs() {

  return (
    <div className="container">
      <div className="bloc-tabs">
        {stores.boards.map((x, i) => <>  <button
          className={stores.board === i ? "tabs active-tabs" : "tabs"}
          key={i+1}
          onClick={() => stores.changeBoard(i)}
        > 0{i + 1} {x.count === x.system && x.count !== 0 ? <AiOutlineCheckCircle /> : ''}
        </button>
        </>)}
          <button onClick={()=>stores.addBoard()} className="addBtn" >
        <IoIosAddCircleOutline   fontSize='1.6rem' />
          </button>   
          <button onClick={()=>stores.removeBoard()} className="removeBtn" >
        <IoIosRemoveCircleOutline   fontSize='1.6rem' />
          </button>  
      </div>

      <div className="content-tabs">

        {stores.boards.map((x, i) => <>
          <div className={stores.board === i ? "content  active-content" : "content"}>
            <Board key={i}  uniqueboard={x} />
          </div>
        </>)}
      </div>
    </div>
  );
}

export default (observer(Tabs));