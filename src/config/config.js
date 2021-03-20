import pr from "pr-unit";
export default {
    styleConstants: {
        rowHeight: 60,
        headerHeight: 114,

        cellDefaults: {
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            shadowOffset: {width: 0,height: 0},
            shadowColor: "rgb(0, 0, 0)",
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            zIndex: 10,
            marginVertical: 5,
            marginHorizontal: 10,
            borderRadius: 15,
        },
        dropShadow: {
            shadowOffset: {width: 0,height: 0},
            shadowColor: "rgb(0, 0, 0)",
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            zIndex: 10,
        },
        headline: {
            fontSize: 70 * pr,
            fontWeight: "500",
        },
        subline: {
            fontSize: 55 * pr,
            fontWeight: "400",
        },
        buttons: {
            height: 114,
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            width: "30%",
        },
    },
}