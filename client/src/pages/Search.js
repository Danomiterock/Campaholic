import React, { useState, useEffect } from "react";
// import axios from "axios";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  // MDBIcon,
} from "react-bootstrap";
import Result from "../components/Results";
import CreatePost from "../components/NewPost";
import "../styles/Search.css";
import API from "../utils/API";

export const Search = () => {
  // Setup our post's state
  const [results, setResults] = useState([]);

  // Store the user's selected state
  const [stateCode, setStateCode] = useState("");
  const [stateCardList, setStateCardList] = useState("");

  // Loads all posts and sets them to posts
  function loadResults() {
    API.searchAreas()
      .then((res) => setResults(res.data["RECDATA"]))
      .catch((err) => console.log(err));
  }

  // When user clicks submit button, load the
  // Results from the API
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    loadResults();
  };

  return (
    <section>
      <div className="search">
        <div id="fieldsearch">
          <InputGroup className="mb-3">
            {/* <MDBIcon icon="search" /> */}
            <FormControl
              placeholder="Search by name or keyword"
              aria-label="Search by name or keyword"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <div id="dropdownsearch">
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto" className="my-1">
                <Form.Label
                  className="mr-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  srOnly
                >
                  Preference
                </Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                  onChange={(e) => {
                    setStateCode(e.target[e.target.selectedIndex].innerHTML);
                    console.log(e.target[e.target.selectedIndex].innerHTML);
                  }}
                >
                  <option value="0">Choose...</option>
                  <option value="1">AK</option>
                  <option value="2">AL</option>
                  <option value="3">AR</option>
                  <option value="4">AZ</option>
                  <option value="5">CA</option>
                  <option value="6">CO</option>
                  <option value="7">CT</option>
                  <option value="8">DE</option>
                  <option value="9">FL</option>
                  <option value="10">GA</option>
                  <option value="11">HI</option>
                  <option value="12">IA</option>
                  <option value="13">ID</option>
                  <option value="14">IL</option>
                  <option value="15">IN</option>
                  <option value="16">KS</option>
                  <option value="17">KY</option>
                  <option value="18">LA</option>
                  <option value="19">MA</option>
                  <option value="20">MD</option>
                  <option value="21">ME</option>
                  <option value="22">MI</option>
                  <option value="23">MN</option>
                  <option value="24">MO</option>
                  <option value="25">MS</option>
                  <option value="26">MT</option>
                  <option value="27">NC</option>
                  <option value="28">ND</option>
                  <option value="29">NE</option>
                  <option value="30">NH</option>
                  <option value="31">NJ</option>
                  <option value="32">NM</option>
                  <option value="33">NV</option>
                  <option value="34">NY</option>
                  <option value="35">OH</option>
                  <option value="36">OK</option>
                  <option value="37">OR</option>
                  <option value="38">PA</option>
                  <option value="39">RI</option>
                  <option value="40">SC</option>
                  <option value="41">SD</option>
                  <option value="42">TN</option>
                  <option value="43">TX</option>
                  <option value="44">UT</option>
                  <option value="45">VA</option>
                  <option value="46">VT</option>
                  <option value="47">WA</option>
                  <option value="48">WI</option>
                  <option value="49">WV</option>
                  <option value="50">WY</option>
                  <option value="51">PR</option>
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Form.Check
                  type="checkbox"
                  id="customControlAutosizing"
                  label="Remember my preference"
                  custom
                />
              </Col>
              <Col xs="auto" className="my-1">
                <Button type="submit" onClick={handleSearchSubmit}>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      </div>
      <section>
        <div>
          {results.map((result) => {
            // Setup ternary expressions to check whether a RecArea has a
            // url for an image, a state code, activities, or events
            // If not, use default values
            var url =
              result["MEDIA"][0] === undefined
                ? "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                : result["MEDIA"][0]["URL"];
            var recStateCode =
              result["RECAREAADDRESS"][0] === undefined
                ? "N/A"
                : result["RECAREAADDRESS"][0]["AddressStateCode"];

            // Iterate through activities and display to
            // respective recArea
            let recActivities;
            for(let i = 0; i < result["ACTIVITY"].length; i++){
              recActivities =
              result["ACTIVITY"] === undefined
                ? "No activities"
                : [result["ACTIVITY"][i]["ActivityName"]];
            }

            // Iterate through events and display to respective
            // recArea
            let recEvents;
            for(let i = 0; i < result["EVENT"].length; i++){
              recEvents =
              result["EVENT"] === undefined
                ? "No events"
                : [result["EVENT"][i]["EventName"]];
            }

            // If a user chooses a specific state code, show recAreas
            // in that chosen state
            if (stateCode === recStateCode) {
              return (
                <article className="result" key={result.RecAreaID}>
                  <Result
                    key={result.RecAreaID}
                    location={result.RecAreaName}
                    description={result.RecAreaDescription}
                    src={url}
                    state={recStateCode}
                    activities={recActivities}
                    events={recEvents}
                  />
                </article>
              );
            }

            // If no state code is selected, display all results
            // of RecAreas from all states
            if (!stateCode) {
              return (
                <article className="result" key={result.RecAreaID}>
                  <Result
                    key={result.RecAreaID}
                    location={result.RecAreaName}
                    description={result.RecAreaDescription}
                    src={url}
                    state={recStateCode}
                    activities={recActivities}
                  />
                </article>
              );
            }
          })}
        </div>
      </section>
    </section>
  );
};

export default Search;