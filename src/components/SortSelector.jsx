import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector({ selectedSortOrder, onSelectedSortOrder }) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Find the selected sort label
  const currentSortLabel = sortOrders.find(order => order.value === selectedSortOrder)?.label || "Order by: Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortLabel}
      </MenuButton>
      <MenuList>
        {sortOrders.map(order => (
          <MenuItem onClick={() => onSelectedSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
