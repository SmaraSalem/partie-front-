import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setUsers,
  blockeduser,
  unblockeduser,
} from "../../reduxToolkit/sliceUsers";
import "./listusers.css";

function ListUsers() {
  const [researchargument, setResearchargument] = useState("");
  const [isblocked, setIsblocked] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      dispatch(setUsers(res.data));
    });
  }, []);

  const users = useSelector((state) => state.users.value).filter(
    (e) =>
      e.name.includes(researchargument) &&
      e.blocked.toString().includes(isblocked)
  );

  const blockedOneUser = (id) => {
    if (window.confirm("vous etes sur ??")) {
      axios.put("http://localhost:5000/users/blocked/" + id).then((res) => {
        dispatch(blockeduser(id));
      });
    }
  };
  const unblockedOneUser = (id) => {
    if (window.confirm("vous etes sur ??")) {
      axios.put("http://localhost:5000/users/unblocked/" + id).then((res) => {
        dispatch(unblockeduser(id));
      });
    }
  };

  return (
    <div class="list-users">
      <header class="text-center text-light my-4">
        <h1 class="mb-4">Liste des ustilisateurs</h1>
        <form class="search">
          <input
            type="text"
            class="form-control m-auto"
            name="search"
            placeholder="cherche avec le nom "
            onChange={(e) => setResearchargument(e.target.value.trim())}
          />
        </form>
      </header>
      <ul class="list-group todos mx-auto text-light ">
        <li class="list-group-item ">
          <i>
            {" "}
            <button
              type="button"
              variant="outline-secondary"
              onClick={() => setIsblocked("")}
            >
              tous
            </button>{" "}
          </i>
          <i>
            {" "}
            <button type="button" onClick={() => setIsblocked("true")}>
              desactif
            </button>{" "}
          </i>
          <i>
            <button type="button" onClick={() => setIsblocked("false")}>
              actif
            </button>
          </i>{" "}
        </li>
      </ul>
      <div className="ul-tt-user">
        {users.map((e) => (
          <ul class="list-group todos mx-auto text-light  ">
            <li class="list-group-item ">
              <i>
                {" "}
                {e.name} {e.lastname}
              </i>

              <i> {e.email}</i>

              <i class="far fa-trash-alt delete">
                {" "}
                {e.blocked ? (
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => {
                      unblockedOneUser(e._id);
                    }}
                  >
                    debloq
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={() => {
                      blockedOneUser(e._id);
                    }}
                  >
                    bloqe
                  </button>
                )}{" "}
              </i>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default ListUsers;
