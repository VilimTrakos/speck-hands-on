import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";
import { FaSearch } from "react-icons/fa";

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 100%;
  margin-bottom: 10px;
`;
export const SearchBarInput = styled.input`
  border: none;
  margin-left: 8px;
  font-size: 16px;
  outline: none;
  width: 50%;
  border-radius: 4px;
  height: 20px;
`;
