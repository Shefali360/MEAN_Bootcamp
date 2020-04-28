const users = [{
        "username": "ingunna",
        "first_name": "Ingunna",
        "last_name": "Litherborough",
        "password": "ilitherborough0",
    },
    {
        "username": "jany",
        "first_name": "Jany",
        "last_name": "Deville",
        "password": "jdeville1",
    },
    {
        "username": "almira",
        "first_name": "Almira",
        "last_name": "Melson",
        "password": "amelson2",
    },
    {
        "username": "danya",
        "first_name": "Danya",
        "last_name": "Ordelt",
        "password": "dordelt3",
    },
    {
        "username": "biddy",
        "first_name": "Biddy",
        "last_name": "Backsal",
        "password": "bbacksal4",
    },
    {
        "username": "lemmy",
        "first_name": "Lemmy",
        "last_name": "Fallon",
        "password": "lfallon5",
    },
    {
        "username": "prentice",
        "first_name": "Prentice",
        "last_name": "Nickell",
        "password": "pnickell6",
    },
    {
        "username": "timotheus",
        "first_name": "Timotheus",
        "last_name": "January 1st",
        "password": "tjanuaryst7",
    },
    {
        "username": "patrizio",
        "first_name": "Patrizio",
        "last_name": "Husher",
        "password": "phusher8",
    },
    {
        "username": "beulah",
        "first_name": "Beulah",
        "last_name": "Gowrie",
        "password": "bgowrie9",
    },
];

const students = [{
        "firstname": "Tad",
        "branch": "Research and Development"
    },
    {
        "firstname": "Lionello",
        "branch": "Support"
    },
    {
        "firstname": "Matteo",
        "branch": "Support"
    },
    {
        "firstname": "Jerrylee",
        "branch": "Human Resources"
    },
    {
        "firstname": "Simone",
        "branch": "Legal"
    },
    {
        "firstname": "Ester",
        "branch": "Business Development"
    },
    {
        "firstname": "Min",
        "branch": "Product Management"
    },
    {
        "firstname": "Prissie",
        "branch": "Training"
    },
    {
        "firstname": "Eldredge",
        "branch": "Legal"
    },
    {
        "firstname": "Clayson",
        "branch": "Legal"
    }
];


home={
    "title":"This is our home page."
}

about={
    "title":"This is about page of our website."
}

contact={
    "title":"This is contact us page."
}
function filterUsers(query) {
    return JSON.stringify(
        users.filter((user) =>user.username.includes(query.toLowerCase()))
        
    );
    
}

function filterStudentData(query) {
    
    return JSON.stringify(
        students.filter(
            (student) => student.branch.toLowerCase() === query.toLowerCase()
        )
    );
}

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    if (req.method === "GET") {
        const parsedUrl = url.parse(req.url, true);
        switch (parsedUrl.pathname) {
            case "/users": {
                if (parsedUrl.query["username"]) {
                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    res.write(filterUsers(parsedUrl.query["username"]));
                    res.end();
                } else {
                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });
                    res.write(JSON.stringify(users));
                    res.end();
                }
            }
            break;
        case "/students": {
            if (parsedUrl.query["branch"]) {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.write(filterStudentData(parsedUrl.query["branch"]));
                res.end();
            } else {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.write(JSON.stringify(students));
                res.end();
            }
        }
        break;

        case "/home":
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.write(JSON.stringify(home));
            res.end();
            break;

        case "/about":
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.write(JSON.stringify(about));
            res.end();
            break;

        case "/contact":
            res.writeHead(200, {
                "Content-Type": "application/json"
            });
            res.write(JSON.stringify(contact));
            res.end();
            break;
            break;

        default: {
            res.writeHead(404, {});
            res.end();
        }
        break;
        }
    } else {
        res.writeHead(404, {});
        res.end();
    }
});

server.listen(3030, () => {
    console.log("server listening on port 3030");
});