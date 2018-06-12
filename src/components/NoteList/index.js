import { connect } from 'react-redux';
import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { chunk, truncate } from 'lodash';

const MapStateToProps = state => ({
  notes: chunk(state.notes, 3),
});

const NoteListComponent = ({ notes }) => (
    <div>
      {notes.map(note => (
        <div className="row mt-3 align-items-center justify-content-around">
          {note.map(el => (
            <div className="col-md-4">
              <Card key={el.Id}>
                <CardBody>
                  <CardTitle>{truncate(el.Name, 18)}</CardTitle>
                  <CardSubtitle>{el.CreatedDate}</CardSubtitle>
                  <CardText>{truncate(el.Description, 15)}</CardText>
                  <Button color="success">View</Button> <Button color="danger">Add</Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      ))}
    </div>
);

const NoteList = connect(MapStateToProps)(NoteListComponent);
export default NoteList;