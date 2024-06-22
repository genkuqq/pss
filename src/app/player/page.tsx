// Client Side because this page has routing link to selected username
"use client";
import styles from "../../styles/player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Standart using "icon={"magnifying-glass"} not working in this file"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export default function PlayerSearch() {
	const router = useRouter();
	const handleSearch = (event: any) => {
		event.preventDefault();
		const username = event.target.username.value;
		router.push(`/player/${username}`);
		event.target.username.value = "";
	};
	return (
		<div>
			<form onSubmit={handleSearch}>
				<div className={styles.search}>
					<input
						type="text"
						id="username"
						name="username"
						placeholder="Kullanıcı Adı"
					/>
					<button type="submit">
						<span style={{ color: "rgb(255,255,255)" }}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</span>
					</button>
				</div>
			</form>
		</div>
	);
}
