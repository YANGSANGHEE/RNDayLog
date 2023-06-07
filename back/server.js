const bodyParser = require('body-parser');
const express = require('express');
const conn = require('./dbconnection');
const app = express();
const port = process.env.PORT || 8084;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//List 조회 / 검색
app.get('/dayloglist/:act', (req, res) => {
  let act = req.params.act;
  let keyword = req.body.keyword;

  switch (act) {
    case 'list':
      conn.query('SELECT * FROM daylogdata', (err, row, field) => {
        if (err) throw err;
        if (!row) {
          res.setHeader('404').send('데이터가 존재하지 않습니다.');
        } else {
          res.send(row);
        }
      });
      break;
    case 'search':
      if (keyword) {
        conn.query(
          `SELECT * FROM daylogdata WHERE con LIKE %${keyword}% `,
          (err, row, field) => {
            if (err) throw err;
            if (!row) {
              res.setHeader('404').send('데이터가 존재하지 않습니다.');
            } else {
              res.send(row);
            }
          },
        );
      } else {
        res.send('키워드가 존재하지 않습니다.');
      }
  }
});

//등록
app.post('/daylogwrite', (req, res) => {
  let title = req.body.title;
  let con = req.body.con;
  let uuid = req.body.uuid;

  conn.query(
    `INSERT INTO daylogdata (uuid,title,con,regdate,modidate) VALUES('${uuid}','${title}','${con}',now(),now())`,
    (err, row, field) => {
      if (err) {
        throw err;
      }
      res.send('저장 완료');
    },
  );
});

//수정
app.get('/daylogupt/:id', (req, res) => {
  let title = req.body.title;
  let con = req.body.con;
  let id = req.params.id;
  let query = `UPDATE daylogdata SET title=${title} , con=${con}, modidate=now() WHERE id = ${id}`;

  conn.query(`SELECT * FROM daylogdata WHERE id = ${id}`, (__, data) => {
    if (!data) {
      res.setHeader('404').send('업데이트할 기존데이터가 존재하지 않습니다.');
    }
    conn.query(query, (err, row, field) => {
      if (err) {
        res.setHeader('404').send('오류가 발생하였습니다');
        throw err;
      } else {
        row.send('저장 완료');
      }
    });
  });
});

//삭제
app.get('/daylogdel/:id', (req, res) => {
  let id = req.params.id;
  let query = `DELETE FROM daylogdata WHERE id = ${id}`;

  conn.query(`SELECT * FROM daylogdata WHERE id = ${id}`, (__, data) => {
    if (!data) {
      res.setHeader('404').send('삭제 할 데이터가 존재하지 않습니다.');
    }
    conn.query(query, (err, row, field) => {
      if (err) {
        res.setHeader('404').send('오류가 발생하였습니다');
        throw err;
      } else {
        row.send('삭제 완료');
      }
    });
  });
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`server is running at ${port}`);
});
