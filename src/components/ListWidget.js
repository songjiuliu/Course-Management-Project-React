import React from "react";

class ListWidget extends React.Component {
    state = {
        widget: this.props.widget,
        temptext :[]
    }

    render() {
        return (
            <div>
                <h3>List Widget</h3>
                {
                    this.props.editing &&
                    <div>
                        <input
                            className="form-control"
                            onChange={(e) => {
                                const newTitle = e.target.value;
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        title: newTitle
                                    }
                                }))
                            }
                            }
                            value={this.state.widget.title}/>
                        <select
                            class="custom-select"
                            onChange={(e) => {
                                const newType = e.target.value
                                console.log(e.target.value)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        type: newType
                                    }
                                }))
                            }}
                            value={this.state.widget.type} >
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LIST">List</option>
                        </select>
                        <textarea className="form-control"
                                  value={this.state.widget.text}
                                  onChange={(e) => {
                                      const newText = e.target.value
                                      this.setState(prevState => ({
                                          widget: {
                                              ...prevState.widget,
                                              text: newText
                                          }
                                      }))
                                  }}>
                        </textarea>
                        <select
                            className="custom-select"
                            onChange={(e) => {
                                const newOrder = parseInt(e.target.value)
                                //console.log(e.target.value)
                                this.setState(prevState => ({
                                    widget: {
                                        ...prevState.widget,
                                        ordernumber: newOrder
                                    }
                                }))
                            }}
                            value={this.state.widget.ordernumber}>
                            <option value={1} >Ordered List</option>
                            <option value={2} >Unordered List</option>
                        </select>
                        <button type="button" class="btn btn-outline-secondary" onClick={() => {
                            this.props.save(this.state.widget)
                        }}>
                            ok
                        </button>
                    </div>
                }
                {
                    <div>

                        <h3>{this.state.widget.title}</h3>
                        {this.state.widget.ordernumber === 2 &&
                            <ul>
                                {
                                    this.state.widget.text.split('\n').map(list =>
                                        <li>{list}</li>)
                                }
                            </ul>
                        }
                        {this.state.widget.ordernumber === 1 &&
                        <ol>
                            {
                                this.state.widget.text.split('\n').map(list =>
                                    <li>{list}</li>)
                            }
                        </ol>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default ListWidget