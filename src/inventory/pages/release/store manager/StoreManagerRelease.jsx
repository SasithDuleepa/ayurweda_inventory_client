import React, { useEffect, useState } from "react";
import Arrow from "../../../../icon/down-arrow.png";
import "./StoreManagerRelease.css";
import axios from "axios";
import IdGenerate from "../../../../utils/id_generate";

export default function StoreManagerRelease() {
  //shows in job preview window
  const [JobData, setJobData] = useState({
    job_no: "",
    job_date: "",
    requested_by: "",
    invoice_no: "",
    invoice_date: "",
    invoice_amount: "",
    invoice_status: "",
    job_status: "",
    job_type: "",
    job_description: "",
    job_items: [
     
    ],
  });

  const [invoiceNo, setinvoiceNo] = useState(IdGenerate("INVOICE"));
  const [invoiceDate, setinvoiceDate] = useState(new Date());
  const [invoiceAmount, setinvoiceAmount] = useState(0);
  const [user, setUsers] = useState("USER-000001");
  const [jobNo, setJobNo] = useState("JOB-0000001");
  const [ requestType , setRequestType ] = useState('')

  const [dropDown1, setDropDown1] = useState("dropdown-content-hide");
  const DropDown1Handler = () => {
    if (dropDown1 === "dropdown-content-hide") {
      setDropDown1("dropdown-content-show");
    } else {
      setDropDown1("dropdown-content-hide");
    }
  };
  const DropDown1SelectHandler = async (job_id) => {
    if (dropDown1 === "dropdown-content-hide") {
      setDropDown1("dropdown-content-show");
    } else {
      setDropDown1("dropdown-content-hide");
    }

    setJobPreviewWindow(true);

    try {const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/job/job/${job_id}`);
      console.log(res.data);

      if (Array.isArray(res.data) && res.data.length > 0) {
        const jobData = {
          job_no: res.data[0].job_id,
          job_date: res.data[0].job_created_date,
          requested_by: res.data[0].job_created_by,
          invoice_no: "",
          invoice_date: "",
          invoice_amount: "",
          invoice_status: "",
          job_status: "",
          job_type: "",
          job_description: "",
          job_items: res.data.map((item) => ({
            item_id: item.job_item_id,
            item_name: item.job_item,
            job_item_description: item.job_item_description,
            requested_qty: item.job_item_requesting_qty,
            measure_unit: item.measuring_unit,
            job_item_status: item.job_item_status,
          })),
        };

        setJobData(jobData);
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  const [dropDown2, setDropDown2] = useState("dropdown-content-hide");
  const [dropdown2InputValue, setDropdown2InputValue] = useState("");
  const DropDown2Handler = () => {
    if (dropDown2 === "dropdown-content-hide") {
      setDropDown2("dropdown-content-show");
    } else {
      setDropDown2("dropdown-content-hide");
    }
  };
  const DropDown2SelectHandler = async (item) => {
    // setDropdown2InputValue(item.item_name)

    if (dropDown2 === "dropdown-content-hide") {
      setDropDown2("dropdown-content-show");
    } else {
      setDropDown2("dropdown-content-hide");
    }

    //get data according to selected item
    console.log(item);
    if (item.table_name === "inventory_store_raw_items") {
      //raw items
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/inventory/raw/RELEASED/${item.item_id}`
        );
        console.log(res.data);
        setTableData(res.data);
        const data = [...tableData];
        data.push({
          item_id: res.data[0].raw_item_inventory_id,
          item_name: res.data[0].raw_item_name,
          item_description: res.data[0].inventory_raw_item_description,
          available_qty: res.data[0].raw_item_shadow_qty,
          quantity: 0,
          measure_unit: res.data[0].raw_item_measure_unit,
          item_price: res.data[0].raw_item_unit_price ,
          store_id:res.data[0].raw_item_store_id  ,
          store_location:res.data[0].raw_item_location_id,
        });
        setTableData(data);
        // console.log(tableData);
      } catch (error) {}
    } else if (item.table_name === "inventory_store_products") {
      //products
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/inventory/product/RELEASED/${item.item_id}`
        );
        console.log(res.data);
        setTableData(res.data);
        const data = [...tableData];
        data.push({
          item_id: res.data[0].inventory_product_id,
          item_name: res.data[0].product_name,
          item_description: res.data[0].inventory_product_description,
          available_qty: res.data[0].product_shadow_qty,
          quantity: 0,
          measure_unit: res.data[0].product_measure_unit,
          item_price: res.data[0].product_unit_price,
          store_id:res.data[0].product_store_id ,
          store_location:res.data[0].product_location_id  ,
        });
        setTableData(data);
        // console.log(tableData);
      } catch (error) {}
    } else if (item.table_name === "inventory_store_non_raw") {
      //products
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/inventory/non-raw/RELEASED/${item.item_id}`
        );
        console.log(res.data);
        setTableData(res.data);
        const data = [...tableData];
        data.push({
          item_id: res.data[0].   non_raw_inventory_item_id ,
          item_name: res.data[0].non_raw_item_name,
          item_description: res.data[0].non_raw_item_description,
          available_qty: res.data[0].non_raw_shadow_qty,
          quantity: 0,
          measure_unit: res.data[0].non_raw_measure_unit,
          item_price: res.data[0].non_raw_item_unit_price,
          store_id:res.data[0].non_raw_store_id ,
          store_location:res.data[0].non_raw_location_id
 
        });
        setTableData(data);
      } catch (error) {}
    }
  };

  //search item from all
  const [itemSearchResult, setItemSearchResult] = useState([]);
  const ItemSearchHandler = async (e) => {
    setDropdown2InputValue(e.target.value);
    if (e.target.value !== "") {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/inventory/all/${e.target.value}`
        );
        setItemSearchResult(res.data);
      } catch (error) {}
    } else {
      setItemSearchResult([]);
    }
  };

  const [jobPreviewWindow, setJobPreviewWindow] = useState(false);

  const AvailableQtyHandler = async () => {
    if (JobData.job_items.length > 0) {
      JobData.job_items.map(async (item, index) => {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/inventory/all/qty/${item.item_id}`
          );
          const data = [...JobData.job_items];
          data[index].available_qty = res.data;
          setJobData({ ...JobData, job_items: data });
        } catch (error) {}
      });
    }
  };
  useEffect(() => {
    AvailableQtyHandler();
  }, [JobData.job_items.length]);

  const JobPreviewCancelHandler = () => {
    setJobPreviewWindow(false);
  };

  const [selectedItem, setSelectedItem] = useState(""); //id
  const [selectedItemName, setSelectedItemName] = useState(""); //name
  const [selectedItemReqQty, setSelectedItemReqQty] = useState(0);
  const [selectedItemJobDescription, setSelectedItemJobDescription] =
    useState("");

  const JobPreviewItemSelectHandler = (item) => {
    console.log(item)
    setSelectedItem(item.item_id);
    setSelectedItemName(item.item_name);
    setSelectedItemReqQty(item.requested_qty);
    setSelectedItemJobDescription(item.job_item_description);

    setItemPreviewWindow(true);
  };

  //item preview window close
  const [itemPreviewWindow, setItemPreviewWindow] = useState(false);
  const ItemPreviewWindowCloseHandler = () => {
    setItemPreviewWindow(false);
  };

  const GetItems = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/inventory/all/allitems/${selectedItem}`);
      console.log(res.data);

      setItems(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    GetItems();
  }, [selectedItem]);

  const ItemPreviewAddHandler = () => {
    if (items.length > 0) {
      // console.log(items)
      items.forEach((item) => {
        if (item.releasing_quantity && item.releasing_quantity !== "") {
          // console.log(item)
          const data = [...tableData];
          data.push(item);
          setTableData(data);

          // console.log(tableData);
        }
      });
    }
  };

  //table data show in main page
  const [tableData, setTableData] = useState([]);

  //shows in items preview
  const [items, setItems] = useState([]);

  const RequestHandler = async () => {
    // console.log(tableData);
    let ReqData = {
      invoice_id: invoiceNo,
      date: invoiceDate,
      user_id: user,
      type: requestType,
      job_id: jobNo,
      status: "PENDING",

      items: tableData,
    };
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/request/add/request`,
        ReqData
      );
      console.log(res.data);
    } catch (error) {}
  };

  return (
    <div className="StoreManagerRelease">
      <p className="title">Inventory Store Manager Release</p>

      <div className="line"></div>
      <div className="container">
        <div className="StoreManagerRelease-info-main-div">
          <div className="StoreManagerRelease-info-input-div">
            <label className="StoreManagerRelease-info-input-label label">
              invoice no
            </label>
            <label className="StoreManagerRelease-info-input-label label">
              :
            </label>
            <input
              className="StoreManagerRelease-info-input form-input"
              value={invoiceNo}
              onChange={(e) => setinvoiceNo(e.target.value)}
              type="text"
              placeholder="invoice no"
            />
          </div>
          <div className="StoreManagerRelease-info-input-div">
            <label className="StoreManagerRelease-info-input-label label">
              date
            </label>
            <label className="StoreManagerRelease-info-input-label label">
              :
            </label>
            <input
              className="StoreManagerRelease-info-input form-input"
              value={invoiceDate}
              onChange={(e) => setinvoiceDate(e.target.value)}
              type="text"
              placeholder="invoice no"
            />
          </div>
          <div className="StoreManagerRelease-info-input-div">
            <label className="StoreManagerRelease-info-input-label label">
              requesting by
            </label>
            <label className="StoreManagerRelease-info-input-label label">
              :
            </label>
            <input
              className="StoreManagerRelease-info-input form-input"
              value={user}
              onChange={(e) => setUsers(e.target.value)}
              type="text"
              placeholder="invoice no"
            />
          </div>
          <div className="StoreManagerRelease-info-input-div">
            <label className="StoreManagerRelease-info-input-label label">
              Request Type
            </label>
            <label className="StoreManagerRelease-info-input-label label">
              :
            </label>
            <select className="StoreManagerRelease-info-input form-input" onChange={(e)=>setRequestType(e.target.value)}>
              <option>SELECT REQUEST TYPE</option>
              <option value={'JOB'}>JOB</option>
              <option value={'SALE'}>SALE</option>
              <option value={'OTHER'}>OTHER</option>
            </select>
          </div>

          <div className="StoreManagerRelease-info-input-div">
            <label className="StoreManagerRelease-info-input-label label">
              Job no(if have){" "}
            </label>
            <label className="StoreManagerRelease-info-input-label label">
              :
            </label>
            <input
              className="StoreManagerRelease-info-input form-input"
              value={jobNo}
              onChange={(e) => setJobNo(e.target.value)}
              type="text"
              placeholder="invoice no"
            />
          </div>
        </div>

        <div className="line"></div>

        <div className="StoreManagerRelease-search-main-div">
          <div className="search-select-div">
            <label className="StoreManagerRelease-search-div-label label">
              Search by Job
            </label>
            <label className="StoreManagerRelease-search-div-label label">
              :
            </label>
            <div className="StoreManagerRelease-search-div-select">
              <button
                onClick={() => DropDown1Handler()}
                className="drop-down-btn "
              >
                <input
                  className="StoreManagerRelease-search-div-select-input "
                  type="text"
                  placeholder="Job Number"
                />
                <img
                  src={Arrow}
                  alt="arrow"
                  className={
                    dropDown1 === "dropdown-content-hide"
                      ? "select-dropdown-img-on"
                      : "select-dropdown-img-off"
                  }
                />
              </button>
              <div className={dropDown1}>
                <button
                  onClick={() => DropDown1SelectHandler("JOB-0001")}
                  className="dropdown-select-btn"
                >
                  JOB-0001
                </button>
              </div>
            </div>
          </div>
          <div className="search-select-div">
            <label className="StoreManagerRelease-search-div-label label">
              Search by Item
            </label>
            <label className="StoreManagerRelease-search-div-label label">
              :
            </label>
            <div className="StoreManagerRelease-search-div-select">
              <button
                onClick={() => DropDown2Handler()}
                className="drop-down-btn "
              >
                <input
                  className="StoreManagerRelease-search-div-select-input "
                  value={dropdown2InputValue}
                  onChange={(e) => ItemSearchHandler(e)}
                  type="text"
                  placeholder="Item Name"
                />
                <img
                  src={Arrow}
                  alt="arrow"
                  className={
                    dropDown2 === "dropdown-content-hide"
                      ? "select-dropdown-img-on"
                      : "select-dropdown-img-off"
                  }
                />
              </button>
              <div className={dropDown2}>
                {itemSearchResult.length > 0 ? (
                  itemSearchResult.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => DropDown2SelectHandler(item)}
                      className="dropdown-select-btn"
                    >
                      {item.item_name}
                    </button>
                  ))
                ) : (
                  <p>no item found</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="StoreManagerRelease-input-main-div">
          <table>
            <thead>
              <tr>
                <td>no</td>
                <td>id</td>
                <td>Name</td>
                <td>available qty</td>
                <td>Quantity</td>
                <td>measure unit</td>
                <td>unit price</td>
                <td>Total</td>
                <td>Store</td>
                <td>location</td>
              </tr>
            </thead>
            {tableData.length > 0 ? (
              tableData.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.item_id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.available_qty}</td>
                    <td>
                      <input
                        value={
                          item.releasing_quantity ? item.releasing_quantity : item.quantity
                        }
                        onChange={
                          item.releasing_quantity ? (e) => {}
                            
                           : 
                          
                          (e) => {
                          const data = [...tableData]
                          data[index].quantity = e.target.value;
                          setTableData(data)
                          console.log(tableData);
                        }}
                      />
                    </td>
                    <td>{item.measure_unit}</td>
                    <td>{item.item_price}</td>
                    <td>{

                      item.releasing_quantity ? item.releasing_quantity * item.item_price : item.quantity* item.item_price
            }</td>

                    <td>{item.store_id}</td>
                    <td>{item.store_location}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody></tbody>
            )}
          </table>
        </div>

        <div className="StoreManagerRelease-btn-main-div">
          <button className="btn" onClick={() => RequestHandler()}>
            Request
          </button>
        </div>
      </div>

      {/* job preview window */}
      <div className={jobPreviewWindow ? "StoreManagerRelease-job-preview" : "hide"  }>
        <p className="title StoreManagerRelease-job-preview-title"> Job Preview</p>
        <div>
          <div className="StoreManagerRelease-job-preview-div-sub">
            <p className="sub_title">job no </p>
            <p className="sub_title"> : </p>
            <p className="sub_title">{JobData.job_no} </p>
          </div>
          <div className="StoreManagerRelease-job-preview-div-sub">
            <p className="sub_title">job date </p>
            <p className="sub_title"> : </p>
            <p className="sub_title">{JobData.job_date} </p>
          </div>
          <div className="StoreManagerRelease-job-preview-div-sub">
            <p className="sub_title">requested by </p>
            <p className="sub_title"> : </p>
            <p className="sub_title">{JobData.requested_by} </p>
          </div>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <td>no</td>
                <td>Name</td>
                <td>job item description</td>
                <td>requested qty</td>
                <td>available qty</td>
                <td>measure unit</td>
                <td>job item status</td>
              </tr>
            </thead>
            {JobData.job_items.length > 0 ? (
              JobData.job_items.map((item, index) => (
                <tbody key={index}>
                  <tr onClick={() => JobPreviewItemSelectHandler(item)}>
                    <td>{index + 1}</td>
                    <td>{item.item_name}</td>
                    <td>{item.job_item_description}</td>
                    <td>{item.requested_qty}</td>
                    <td>{item.available_qty}</td>
                    <td>{item.measure_unit}</td>
                    <td>{item.job_item_status}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody></tbody>
            )}
          </table>
        </div>

        <div>
          <button className="btn" onClick={() => JobPreviewCancelHandler()}>
            cancel
          </button>
        </div>
      </div>



{/* job preview items */}
      <div
        className={
          itemPreviewWindow ? "StoreManagerRelease-Item-preview" : "hide"
        }
      >
        <p className="title StoreManagerRelease-Item-preview-title">
          item preview
        </p>
        <div className="StoreManagerRelease-Item-preview-info-div">
          <div className="StoreManagerRelease-Item-preview-info-div-sub">
            <p className="sub_title">Item Name </p>
            <p className="sub_title">:</p>
            <p className="sub_title">{selectedItemName} </p>
          </div>

          <div className="StoreManagerRelease-Item-preview-info-div-sub">
            <p className="sub_title">Item Description </p>
            <p className="sub_title">:</p>
            <p className="sub_title">{selectedItemJobDescription} </p>
          </div>

          <div className="StoreManagerRelease-Item-preview-info-div-sub">
            <p className="sub_title">Item Requested Quantity </p>
            <p className="sub_title">:</p>
            <p className="sub_title">{selectedItemReqQty} </p>
          </div>
        </div>

        <div className="line"></div>
        <div>
          <table>
            <thead>
              <tr>
                <td>no</td>
                <td>Name</td>
                <td>available qty</td>
                <td>releasing qty</td>
                <td>measure unit</td>
                <td>date</td>
              </tr>
            </thead>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.item_name}</td>
                    <td>{item.available_qty}</td>
                    <td>
                      <input type="number" value={item.releasing_quantity ? item.releasing_quantity : ""}
                        onChange={(e) => {
                          const data = [...items];
                          data[index].releasing_quantity = e.target.value;
                          setItems(data);
                          console.log(items);
                        }}
                      />
                    </td>
                    <td>{item.measure_unit}</td>
                    <td>{item.item_released_date}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <tbody></tbody>
            )}
          </table>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => ItemPreviewWindowCloseHandler()}
          >
            CANCEL
          </button>
          <button className="btn" onClick={() => ItemPreviewAddHandler()}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
