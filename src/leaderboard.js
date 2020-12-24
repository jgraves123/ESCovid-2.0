import React, {Component} from 'react';
import "./index.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Griddle, {plugins} from 'griddle-react';
//npm install react-super-responsive-table --save
//npm install --save griddle-react, http://griddlegriddle.github.io/Griddle/


class Leader extends Component {
    data = [
        { Team: 'Woba Boba Baby Yodas', Time:115, Hints:5 },
        { Team: 'Fake team', Time: 130, Hints:2}
    ];

    sortProperties = [
        { id: 'Time', sortAscending: true }
    ];

    render() {
        return(
            <section>
                <div className="container" align={"center"} width={"50%"}>
                    <h2>ESCovid-19 Leaderboard</h2>
                </div>

                <Table margin={"30px"}>
                    <Thead>
                        <Tr>
                            <Th>Team</Th>
                            <Th>Time (minutes)</Th>
                            <Th>Hints</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Woba Boba Baby Yodas</Td>
                            <Td>115</Td>
                            <Td>5</Td>
                        </Tr>
                    </Tbody>
                </Table>
                <div className="container" align={"center"} width={"50%"}>
                    <h2>ESCovid-20 Leaderboard</h2>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Team</Th>
                                <Th>Time (minutes)</Th>
                                <Th>Hints</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>No one yet!</Td>
                                <Td>0</Td>
                                <Td>0</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </div>
                {/* griddle = more customizable */}
                <div className="container" align={"center"}>
                    <Griddle data={this.data.slice(0,5)} plugins={[plugins.LocalPlugin]} sortProperties={this.sortProperties}/>
                </div>
            </section>
        )
    }
}

export default Leader;