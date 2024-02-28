import { FiUser, FiDollarSign, FiHome, FiClipboard, FiLink, FiFileText, FiCheckSquare, FiMapPin, FiChevronDown } from "react-icons/fi";

const sytemsList = [
    {
        _id: "1",
        name: "POS",
        url: "/#",
        icon: <FiDollarSign />,
        expandIcon: <FiChevronDown />,
        // active: true,
        features: [
            {
            _id: "1.1",
            name: "Pos ",
            url: "/pos",
            icon: <FiFileText/>,
            expandIcon: <FiChevronDown />,
            
            },
            {
            _id: "1.2",
             name: "customer",
            url: "/#",
            icon: <FiFileText/>,
            expandIcon: <FiChevronDown />,
            subFeatures: [
                {
                    _id: "1.2.1",
                     name: "customer add ",
                    url: "/customer/add",
                },{
                    _id: "1.2.2",
                     name: "customer update ",
                    url: "/customer/update",
                },{
                    _id: "1.2.3",
                     name: "customer view ",
                    url: "/customer/view",
                }
            ]
            }
        ]
    },
    {
        _id: "2",
        name: "INVENTORY",
        url: "/store-manager-release",
        icon: <FiFileText/>,
        expandIcon: <FiChevronDown />,
        features: [
            {
             _id: "2.1",
            name: "Store Manager Release",
            url: "/store-manager-release",
            },
            {
                _id: "2.2",
               name: "Store Keeper Release",
               url: "/store-keeper-release",
               // active: true,
           },{
            _id: "2.3",
           name: "Inventory purchase",
           url: "/inventory-purchase",
           // active: true,
       },
        ]
    },
   

    
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