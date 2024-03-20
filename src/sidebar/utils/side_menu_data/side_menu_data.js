import { FiUser, FiDollarSign, FiHome, FiClipboard, FiLink, FiFileText, FiCheckSquare, FiMapPin, FiChevronDown } from "react-icons/fi";
// jvh
const sytemsList = [
    {
        _id: "1",
        name: "POS",
        url: "/pos/pos",
        icon: <FiDollarSign />,
        expandIcon: <FiChevronDown />,
        
        features: [
            {
            _id: "1.1",
            name: "POS ",
            url: "/pos/pos",
            icon: <FiFileText/>,
            expandIcon: <FiChevronDown />,
            
            },{
                _id: "1.2",
                name: "POS BILLS ",
                url: "/pos/bill",
                icon: <FiFileText/>,
                expandIcon: <FiChevronDown />,
                
            },{
                _id: "1.3",
                name: "DASHBOARD ",
                url: "/pos/pos-dashboard",
                icon: <FiFileText/>,
                expandIcon: <FiChevronDown />,
                
                }

        ]
    },
    {
        _id: "2",
        name: "INVENTORY",
        url: "/inventory/purchase",
        icon: <FiFileText/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
             _id: "2.1",
            name: "INVENTORY PURCHASE",
            url: "/inventory/purchase"
            },{
            _id: "2.2",
            name: "INVENTORY STORE",
            url: "/inventory/store",
            },{
            _id: "2.3",
            name: "INVENTORY REQUEST",
            url: "/inventory/request"
            },{
            _id: "2.4",
            name: "INVENTORY RELEASE",
            url: "/inventory/store-keeper-release"
            },{
            _id: "2.5",
            name: "INVENTORY DISPOSE",
            url: "/inventory/dispose"
            }
        ],

        },{
        _id: "3",
        name: "BRANCH",
        url: "/branches/add",
        icon: <FiMapPin/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
             _id: "3.1",
            name: "ADD BRANCH",
            url: "/branches/add",
            },{
             _id: "3.2",
            name: "UPDATE BRANCH",
            url: "/branches/update",
            }
            ]
    },{
        _id: "4",
        name: "USERS",
        url: "/users/add",
        icon: <FiUser/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
             _id: "4.1",
            name: "ADD USERS",
            url: "/users/add",
            },{
            _id: "4.2",
            name: "UPDATE USERS",
               url: "/users/update",
            },{
            _id: "4.3",
            name: "USERS ROLE",
            url: "/users/role",
            }
            ]
    },{
        _id: "5",
        name: "CUSTOMER",
        url: "/customer/add",
        icon: <FiUser/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "5.1",
            name: "ADD CUSTOMER",
            url: "/customer/add",
            },{
            _id:"5.2",
            name: "UPDATE CUSTOMER",
            url: "/customer/update",
            },{
            _id: "5.3",
            name: "VIEW CUSTOMER",
            url: "/customer/view",
            }
        ]
    },{
        _id: "6",
        name: "INVENTORY TRANSFER",
        url: "/transfer/request",
        icon: <FiClipboard/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "6.1",
            name: "REQUEST ITEMS",
            url: "/transfer/request",
            },{
            _id: "6.2",
            name: "TRANSFER REQUEST",
            url: "/transfer/send",
            }
        ]
    },{
        _id: "7",
        name: "SUPPLIER",
        url: "/supplier/add",
        icon: <FiClipboard/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "7.1",
            name: "ADD SUPPLIER",
            url: "/supplier/add",
            },{
            _id: "7.2",
            name: "UPDATE SUPPLIER",
            url: "/supplier/update",
            }
        ]
    },{
        _id:"8",
        name:"ITEM CATEGORY",
        url: "/item category/add",
        icon: <FiCheckSquare/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "8.1",
            name: "ADD ITEM CATEGORY",
            url: "/item category/add",
            },{
            _id: "8.2",
            name: "UPDATE ITEM CATEGORY",
            url: "/item category/update",
            }
        ]
    },{
        _id: "9",
        name: "ITEM",
        url: "/items/create",
        icon: <FiCheckSquare/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "9.1",
            name: "ADD ITEM",
            url: "/items/create",
            },{
            _id: "9.2",
            name: "UPDATE ITEM",
            url: "/items/update",
            }
        ]
    },{
        _id: "10",
        name: "STORES",
        url: "/stores/add",
        icon: <FiCheckSquare/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
            _id: "9.1",
            name: "ADD STORE",
            url: "/stores/add",
            },{
            _id: "9.2",
            name: "UPDATE STORE",
            url: "/stores/update",
            }
        ]
    }

   

    
]

export default sytemsList;






























// import { FiUser, FiDollarSign, FiHome, FiClipboard, FiLink, FiFileText, FiCheckSquare, FiMapPin, FiChevronDown } from "react-icons/fi";

// const sytemsList = [
//     {
//         _id: "1",
//         name: "Power BI - Dashboards",
//         url: "/power_bi",
//         icon: <FiUser />,
//         expandIcon: <FiChevronDown />,
//         // active: true,
//         features: [
//             {
//                 _id: "1.1",
//                 name: "Cash flow forecast",
//                 url: "/power_bi/cash_forecast",
//                 // active: true,
//             },
//             {
//                 _id: "1.2",
//                 name: "Account receivable ageing",
//                 url: "/power_bi/account_receivable_ageing",
//                 // active: false,
//             },
//             {
//                 _id: "1.3",
//                 name: "Ageing vs revenue analysis",
//                 url: "/power_bi/ageing_vs_revenue_analysis",
//                 // active: false,
//             },
//             {
//                 _id: "1.4",
//                 name: "Service ticket/token overview",
//                 url: "/power_bi/service_ticket",
//                 // active: false,
//             },
//             {
//                 _id: "1.5",
//                 name: "Purchase quotations",
//                 url: "/power_bi/purchase_quotations",
//                 // active: false,
//             },
//         ]
//     },
//     {
//         _id: "2",
//         name: "Finace Management",
//         url: "/finance_management",
//         icon: <FiDollarSign />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: [
//             {
//                 _id: "2.1",
//                 name: "General ledger integration",
//                 url: "/finance_management/general_ledger_integration",
//                 // active: false,
//             },
//             {
//                 _id: "2.2",
//                 name: "Cash flow management",
//                 url: "/finance_management/cash_flow_management",
//                 // active: false,
//             },
//             {
//                 _id: "2.3",
//                 name: "Profitability tracking",
//                 url: "/finance_management/profitability_tracking",
//                 // active: false,
//             },
//             {
//                 _id: "2.4",
//                 name: "Banking operations",
//                 url: "/finance_management/banking_operators",
//                 // active: false,
//             },
//             {
//                 _id: "2.5",
//                 name: "Payments and receivables",
//                 url: "/finance_management/payment_and_receivables",
//                 // active: false,
//             },
//             {
//                 _id: "2.6",
//                 name: "Bank reconciliation",
//                 url: "/finance_management/bank_reconciliation",
//                 // active: false,
//             },
//             {
//                 _id: "2.7",
//                 name: "Budgeting capabilities",
//                 url: "/finance_management/budgeting_capabilities",
//                 // active: false,
//             },
//             {
//                 _id: "2.8",
//                 name: "Incentive Scheme/Method Calculation",
//                 url: "/finance_management/incentive_calculation",
//                 // active: false,
//             },
//             {
//                 _id: "2.9",
//                 name: "Sales outlets and online sales management",
//                 url: "/finance_management/outlets_and_online_sales_management",
//                 // active: false,
//             },
//             {
//                 _id: "2.10",
//                 name: "User access and permissions",
//                 url: "/finance_management/user_access_and_permissions",
//                 // active: false,
//             },
//             {
//                 _id: "2.11",
//                 name: "Asset Inventory",
//                 url: "/finance_management/asset_inventory",
//                 expandIcon: <FiChevronDown />,
//                 // active: false,
//                 subFeatures: [
//                     {
//                         _id: "2.11.1",
//                         name: "Asset inventory management",
//                         url: "/finance_management/asset_inventory_management/asset_inventory_management",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.2",
//                         name: "Maintenance and repairs",
//                         url: "/finance_management/asset_inventory_management/maintenance_and_repair",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.3",
//                         name: "Depreciation and valuation",
//                         url: "/finance_management/asset_inventory_management/depreciation_and_valuation",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.4",
//                         name: "Asset procurement and budgeting",
//                         url: "/finance_management/asset_inventory_management/asset_procurement_and_budgeting",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.5",
//                         name: "Vendor and warranty management",
//                         url: "/finance_management/asset_inventory_management/vendor_and_warranty_management",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.6",
//                         name: "Integration with other ERP modules",
//                         url: "/finance_management/asset_inventory_management/other_erp_modules",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.7",
//                         name: "User access and security",
//                         url: "/finance_management/asset_inventory_management/user_access_and_security",
//                         // active: false,
//                     },
//                     {
//                         _id: "2.11.8",
//                         name: "Reporting and analytics",
//                         url: "/finance_management/asset_inventory_management/reporting_and_analytics",
//                         // active: false,
//                     },
//                 ]
//             },
//         ]
//     },
//     {
//         _id: "3",
//         name: "HRIS",
//         url: "/hris",
//         icon: <FiUser />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "4",
//         name: "Inventory Management",
//         url: "/inventory_management",
//         icon: <FiHome />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "5",
//         name: "Production Planning System",
//         url: "/production_planing_system",
//         icon: <FiClipboard />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "6",
//         name: "Sales & POS System",
//         url: "/sales_and_pos",
//         icon: <FiFileText />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "7",
//         name: "Supply Chain Management",
//         url: "/supply_chain_management",
//         icon: <FiLink />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "8",
//         name: "Quality Management",
//         url: "/quality_management",
//         icon: <FiCheckSquare />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "9",
//         name: "Online Vehicle Fleet Management",
//         url: "/vehical_fleet_management",
//         icon: <FiMapPin />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
//     {
//         _id: "10",
//         name: "Administration",
//         url: "/administration",
//         icon: <FiUser />,
//         expandIcon: <FiChevronDown />,
//         // active: false,
//         features: []
//     },
// ]

// export default sytemsList;