import { Plus } from 'lucide-react'
import { Search } from 'lucide-react'
import { Edit2 } from 'lucide-react'
import { Trash2 } from 'lucide-react'
import React from 'react'
import RecordModel from './RecordMoedl'

function RecordTable() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h1 className="text-3xl font-bold Otext-gray-800 mb-2">
                        Employee Management
                    </h1>
                    <p className="text-gray-600">
                        {""}
                        Manage employee records with Redux Toolkit
                    </p>
                </div>

                {/* Search and Add utton */}
                <div className=" bg-white rounded-lg shadow-md p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform-translate-y-1/2 text-gray-400" size={20} />
                            <input type="text" placeholder="Search by name, email or department" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            <Plus size={20} />
                        </button>
                    </div>
                </div>

                {/* Employee Table */}
                <div className=" bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold
                                Otext-gray-700 uppercase">
                                        ID
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Name
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Email
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Phone
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Position
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {/* Conditional Rendering */}
                                <tr className="px-6 py-12 text-center">
                                    <td colSpan="6">No Record Found</td>
                                </tr>
                                {/* else */}
                                {/* Map Method */}
                                <tr className=" hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-2 whitespace-nowrap text-sm
                                Otext-gray-900">
                                        1
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        John Doe
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        john@gmail.com
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        +977 95652145
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        Full Stack Developer
                                    </td>
                                    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                                        <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition-all text-sm font-medium">
                                            <Edit2 size={16} />EDIT
                                        </button>
                                         <button className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700 transition-all text-sm font-medium">
                                            <Trash2 size={16} />DELETE
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Footer */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-700">
                                Showing sorted Records of all results
                            </p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Previous
                                </button>
                                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <RecordModel />
        </div >
    
    )
}

export default RecordTable