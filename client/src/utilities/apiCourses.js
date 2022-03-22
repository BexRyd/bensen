// if we don´t add a method then GET is the default  as well as body will be set to nothing if we do not add a body
const fetchUtility = (url, method = "GET", body = {}) => {
  const options = {
    method,
  };
  // om det är post eller put så lägger vi även på body
  if (method == "POST" || method == "PUT") {
    options.headers = {
      "Content-Type": "application/json",
    };

    options.body = JSON.stringify(body);
  }

  // if method is get you only need the url but you can add options if you want
  return fetch(url, options).then((res) => res.json());
};

// default method is GET so we do not have to state that
const get = (url) => fetchUtility(url);

// in the POST we add both the method POST as well as the body we want to add
const post = (url, body) => fetchUtility(url, "POST", body);

const put = (url, body) => fetchUtility(url, "PUT", body);

const remove = (url) => fetchUtility(url, "DELETE");

export { get, post, put, remove };
