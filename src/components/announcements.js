import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import React from 'react'

function CommentBox(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <textarea type="text" className="form-control" placeholder="Announcement Title" aria-label="Announcement Title" aria-describedby="basic-addon2"></textarea>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <textarea type="text" className="form-control" placeholder="Announcement" aria-label="Announcement" aria-describedby="basic-addon2"></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button>Post</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function AnnouncementPage() {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()},${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  const style1 = {paddingRight:'10px'};
  const style2 = {marginTop: '6px'};
  const badgeText1 = {color: '#F27349'};
  const badgeText2 = {color: '#C3B2C8'};
  const badgeBg1 = {backgroundColor: '#FEE6DC'  };
  const badgeBg2 = {backgroundColor: '#EBE6ED'  };
  const button = {width: '100%'};
  const iconH = {height: '15px'};
  const iconW = {width: '15px'};
  const fontSize = {fontSize: '16px'}
  const dateSize = {fontSize: '15px'}
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <><br></br>
    <div className='container'>
    <div class="row">
        <div class="col-sm-8">
        <Card className="ml-2">
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted" style={{...dateSize}}>{date}</Card.Subtitle>
                <Card.Title style={{...fontSize}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                <Badge bg="" style={{...badgeText1,...badgeBg1}} >
                    <img src='/images/bell.png' style={{...iconH, ...iconW}} alt ='img'></img>ANNOUNCEMENT
                </Badge>{' '}
                <Card.Text >
                    <blockquote className="blockquote mb-0">
                        <p style={{...fontSize}}>
                            {' '}
                            In placerat nibh in nibh convallis, a porttitor est feugiat. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nam finibus enim id mi laoreet iaculis. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Duis eros lacus, porta id eros eget, convallis sollicitudin massa. 
                            Sed velit ipsum, tempus nec euismod in, convallis vitae eros. Nulla luctus diam vel sem iaculis, 
                            a congue massa varius. Donec gravida turpis orci, vitae ullamcorper lorem tempor sed. Nam congue, dui vitae accumsan ornare, sapien dui aliquet ipsum, eget varius risus est a magna. 
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title" style={{...fontSize}}>Skidos Team</cite>
                        </footer>
                    </blockquote>
                </Card.Text>
                <div className="input-group mb-3">
                <i className="bi bi-emoji-smile" style={{...style1, ...style2} }></i>
                <textarea type="text" className="form-control" placeholder="Give us some feedback" aria-label="Give us some feedback" aria-describedby="basic-addon2"></textarea>
                    <button className="btn btn-outline-secondary" type="button"><i class="bi bi-send-fill"></i></button>
                </div>
            </Card.Body>
        </Card> <br></br>   
        <Card className="ml-2">
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted" style={{...dateSize}}>{date}</Card.Subtitle>
                <Card.Title style={{...fontSize}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Card.Title>
                    <Badge bg="" style={{...badgeText2,...badgeBg2}} >
                        <img src='/images/star.png' style={{...iconH, ...iconW}} alt ='img'></img>PROMOTIONS
                    </Badge>{' '}
                    <Badge bg="" style={{...badgeText1,...badgeBg1}} >
                        <img src='/images/bell.png' style={{...iconH, ...iconW}} alt ='img'></img>ANNOUNCEMENT
                    </Badge>{' '}
                <Card.Text >
                    <blockquote className="blockquote mb-0">
                        <p style={{...fontSize}}>
                            {' '}
                            In placerat nibh in nibh convallis, a porttitor est feugiat. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nam finibus enim id mi laoreet iaculis. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Duis eros lacus, porta id eros eget, convallis sollicitudin massa. 
                            Sed velit ipsum, tempus nec euismod in, convallis vitae eros. Nulla luctus diam vel sem iaculis, 
                            a congue massa varius. Donec gravida turpis orci, vitae ullamcorper lorem tempor sed. Nam congue, dui vitae accumsan ornare, sapien dui aliquet ipsum, eget varius risus est a magna. 
                            {' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title" style={{...fontSize}}>Skidos Team</cite>
                        </footer>
                    </blockquote>
                </Card.Text>
                <div className="input-group mb-3">
                <i className="bi bi-emoji-smile" style={{...style1, ...style2} }></i>
                <textarea type="text" className="form-control" placeholder="Give us some feedback" aria-label="Give us some feedback" ></textarea>
                    <button className="btn btn-outline-secondary" type="button"><i class="bi bi-send-fill"></i></button>
                </div>
            </Card.Body>
        </Card> <br></br>   
        </div>
        <div class="col-sm-4">
            <Button variant="primary" size="lg" style={{...fontSize, ...button}} onClick={() => setModalShow(true)} >submit an announcement</Button>
            <CommentBox show={modalShow} onHide={() => setModalShow(false)}/>
            <div>
            <Nav defaultActiveKey="1" className="flex-column" >
                <Nav.Link eventKey= "1" style={{color:'black'}}>ALL POSTS</Nav.Link>
                <Nav.Link eventKey="2" style={{color:'black'}}>PROMOTIONS <img src='/images/star.png' style={{...iconH, ...iconW}} alt ='img'></img></Nav.Link>
                <Nav.Link eventKey="3" style={{color:'black'}}>ANNOUNCEMENTS <img src='/images/bell.png' style={{...iconH, ...iconW}} alt ='img'></img></Nav.Link>
            </Nav>
            </div>
        </div>
    </div>
    </div>
  </>
  );
}

export default AnnouncementPage;