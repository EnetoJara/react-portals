import * as React from 'react';
import "./App.css";
import {Modal} from "./hoc/modal";
export interface AppState {
  show: boolean;
}
export class App extends React.Component<any, AppState> {

  public state: AppState;
  public constructor (props: any) {
    super (props);

    this.state = {
      show: false
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  public onClickHandler (evt: React.MouseEvent) {
    evt.preventDefault();
    this.setState(prev => ({
      show: !prev.show
    }));
  }

  public render () {
    const {show} = this.state;
    const styles = show ? "modal display" : "modal";
    return (
        <>
      <button className="btn" onClick={this.onClickHandler} type="button">open modal</button>
        <Modal>
          <div id="lil-modal" className={styles}>
            <div className="modal-content">
              <div className="modal-header"><span role="button" onClick={this.onClickHandler} className="btn-close">&times;</span>
                <h2>Modal Header</h2>
              </div>
              <div className="modal-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="modal-footer">
                <h3>Modal Footer</h3>
              </div>
            </div>
          </div>
      </Modal>
          </>
    )
  }
}
