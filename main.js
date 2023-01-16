const baseURL = "https://read-file-mml-production.up.railway.app";

function htmlizeResponse(res) {
  return (
    `<div class="alert alert-secondary mt-2" role="alert"><pre>` +
    JSON.stringify(res, null, 2) +
    "</pre></div>"
  );
}

// Database
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
    console.log(result);
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

    const data = await res.json();

    resultElement.innerHTML = htmlizeResponse(data);
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

// Upload File

async function getAllPathFile() {
  let resultElement = document.getElementById("uploadFileResult");
  resultElement.innerHTML = "";

  try {
    const res = await fetch(`${baseURL}/files`);

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();
    console.log(data);

    resultElement.innerHTML = htmlizeResponse(data);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}


async function upload() {
  let resultElement = document.getElementById("uploadFileResult");
  resultElement.innerHTML = "";

    let formData = new FormData();
  
    for (let i = 0, numFiles = fileList.length; i < numFiles; i++) {
      const file = fileList[i];
    }     
    

  try {
    const res = await fetch(`${baseURL}/upload`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: formData
    });

    if (!res.ok) {
      const message = `An error has occured: ${res.status} - ${res.statusText}`;
      throw new Error(message);
    }

    const data = await res.json();

    resultElement.innerHTML = htmlizeResponse(data);
  } catch (err) {
    resultElement.innerHTML = htmlizeResponse(err.message);
  }
}



//File
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

async function postDataBilling() {
  let resultElement = document.getElementById("postResultBilling");
  resultElement.innerHTML = "";

  const path = document.getElementById("path_2").value;



  const postData = {
    path: path
  };

  try {
    const res = await fetch(`${baseURL}/read-file-billing`, {
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

async function postDataIngw() {
  let resultElement = document.getElementById("postResultIngw");
  resultElement.innerHTML = "";

  const path = document.getElementById("path_3").value;



  const postData = {
    path: path
  };

  try {
    const res = await fetch(`${baseURL}/read-file-ingw`, {
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



async function postDataMbf() {
  let resultElement = document.getElementById("postResultMbf");
  resultElement.innerHTML = "";

  const path = document.getElementById("path_4").value;



  const postData = {
    path: path
  };

  try {
    const res = await fetch(`${baseURL}/read-file-mbf`, {
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


//Database
function clearGetOutput() {
  document.getElementById("getResult").innerHTML = "";
}

function clearPostOutput() {
  document.getElementById("postResult").innerHTML = "";
}

function clearDeleteOutput() {
  document.getElementById("deleteResult").innerHTML = "";
}

//Upload File

function clearListFile() {
  document.getElementById("uploadFileResult").innerHTML = "";
}


//File
function clearPostPcrfOutput() {
  document.getElementById("postResultPcrf").innerHTML = "";
}
function clearPostBillingOutput() {
  document.getElementById("postResultBilling").innerHTML = "";
}
function clearPostIngwOutput() {
  document.getElementById("postResultIngw").innerHTML = "";
}
function clearPostMbfOutput() {
  document.getElementById("postResultMbf").innerHTML = "";
}
