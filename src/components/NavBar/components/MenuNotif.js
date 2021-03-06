import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Badge } from '@material-ui/core'

export default class MenuNotif extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Badge badgeContent="3" color="primary" style={{color:"#FFFFFF"}}>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M4 11V1H20V11" stroke="#444444" stroke-width="2" stroke-linecap="square" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 15V23H1V15H8V18H16V15H23Z" stroke="#444444" stroke-width="2" stroke-linecap="square" />
                        <path d="M9 6H15" stroke="#444444" stroke-width="2" stroke-linecap="square" />
                        <path d="M9 10H15" stroke="#444444" stroke-width="2" stroke-linecap="square" />
                    </g>
                </svg>
                </Badge>
                

            </div>
        )
    }
}
