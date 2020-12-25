import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import UserInformation from "./Card";
const StyledNode = styled.div`
 
`;

const StyledTreeExample = () => (
    <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={<StyledNode><UserInformation
            name="Toghrul Rajab"
            career="toghrulrajab@gmail.com"     projects="222"
            structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
        /></StyledNode>}
    >
        <TreeNode label={<StyledNode><UserInformation
            name="Toghrul Rajab"
            career="toghrulrajab@gmail.com"     projects="222"
            structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
        /></StyledNode>}>
            <TreeNode label={<StyledNode><UserInformation
                name="Toghrul Rajab"
                career="toghrulrajab@gmail.com"     projects="222"
                structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
            /></StyledNode>}>

            </TreeNode>
        </TreeNode>
        <TreeNode label={<StyledNode><UserInformation
            name="Toghrul Rajab"
            career="toghrulrajab@gmail.com"     projects="222"
            structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
        /></StyledNode>}>
            <TreeNode label={<StyledNode><UserInformation
                name="Toghrul Rajab"
                career="toghrulrajab@gmail.com"     projects="222"
                structur="Marketinq" positions ="Direktor" look="Bax" mail="Mail at"
            /></StyledNode>}>

            </TreeNode>
        </TreeNode>

    </Tree>
);

export default StyledTreeExample;
