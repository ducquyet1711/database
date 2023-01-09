const baseURL = "https://read-file-mml-production.up.railway.app";

function htmlizeResponse(res) {
  return (
    `<div class="alert alert-secondary mt-2" role="alert"><pre>` +
    JSON.stringify(res, null, 2) +
    "</pre></div>"
  );
}

async function getAllData() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  try {
    const res = await fetch(`${baseURL}/find-all`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function getDataById() {
  let resultElement = document.getElementById("getResult");
  resultElement.innerHTML = "";

  const id = document.getElementById("get-id").value;

  if (id) {
    try {
      const res = await fetch(`${baseURL}/find-by-id/?requestId=${id}`);

      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        data: data,
      };

      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err.message);
    }
  }
}
async function deleteDataById() {
    let resultElement = document.getElementById("deleteResult");
    resultElement.innerHTML = "";
  
    const id = document.getElementById("delete-id").value;
  
    try {
      const res = await fetch(`${baseURL}/delete/?requestId=${id}`, { method: "delete" });
  
      const data = "Xoá thành công";
  
      const result = {
        data: data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err.message);
    }
}

async function postData() {
  let resultElement = document.getElementById("postResult");
  resultElement.innerHTML = "";

  var request_id_1 = document.getElementById("request_id_1").value;
  var task_id_1 = document.getElementById("task_id_1").value;
  const request = document.getElementById("request_1").value;
  const response = document.getElementById("response_1").value;



  const postData = {
    requestId: request_id_1,
    taskId: task_id_1,
    request: request,
    response: response,
  };

  try {
    const res = await fetch(`${baseURL}/create`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(postData),
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    const result = {
      data: data,
    };

    resultElement.innerHTML = htmlizeResponse(result);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}

async function postDataPcrf() {
    let resultElement = document.getElementById("postResultPcrf");
    resultElement.innerHTML = "";
  
    const path = document.getElementById("path_1").value;
  
  
  
    const postData = {
      path: path
    };
  
    try {
      const res = await fetch(`${baseURL}/read-file-pcrf`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
      });
  
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
  
      const data = await res.json();
  
      const result = {
        data: data,
      };
  
      resultElement.innerHTML = htmlizeResponse(result);
    } catch (err) {
      resultElement.innerHTML = htmlizeResponse(err.message);
    }
  }
  



function clearGetOutput() {
  document.getElementById("getResult").innerHTML = "";
}

function clearPostOutput() {
  document.getElementById("postResult").innerHTML = "";
}

function clearDeleteOutput() {
  document.getElementById("deleteResult").innerHTML = "";
}