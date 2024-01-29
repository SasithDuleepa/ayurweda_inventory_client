import axios from 'axios';

const getSupplierNameById = async (supplier_id) => {
    if (supplier_id) {
        try {
            const res =await  axios.get(`${process.env.REACT_APP_BACKEND_URL}/supplier/${supplier_id}`);
            console.log(res.data);

            if (res.data && res.data.length > 0) {
                return res.data[0].supplier_name;
            } else {
                return 'Unknown Supplier';
            }
        } catch (error) {
            console.error('Error fetching supplier name:', error);
            return 'Error Fetching Supplier Name';
        }
    } else {
        return 'No Supplier ID provided';
    }
};

export default getSupplierNameById;
