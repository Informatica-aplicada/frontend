import React from "react";

export default function CheckBox({boton, years}){

      const handleOnChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
          // console.log("✅ Checkbox is checked - push " + value);
          years.push(Number(value));
        } else {
          // console.log("⛔️ Checkbox is NOT checked - pop " + value);
          years.pop(Number(value));
        }
      };

    
    return (
      <React.Fragment>
        <div className="mt-3">
          <p>
            <small>Este registro permite seleccion multiple</small>
          </p>
          <h5 className="card-title">Años </h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="topping"
              name="2011"
              value="2011"
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              2011
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="topping"
              name="2012"
              value="2012"
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              2012
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="topping"
              name="2013"
              value="2013"
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              2013
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="topping"
              name="2014"
              value="2014"
              onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              2014
            </label>
          </div>
          <div className="mt-3">
            <button
              onClick={boton}
              className="btn btn-primary btn-block"
              type="submit"
            >
              Aceptar
            </button>
          </div>
        </div>
      </React.Fragment>
    );
}