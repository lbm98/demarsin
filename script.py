from pathlib import Path

def run_country(country):
    compressed = Path(f"./src/assets/{country}/compressed")
    image_names = [x.stem for x in compressed.iterdir()]

    out = []
    for image_name in image_names:
        out.append(f"<ImageWrapper country=\"{country}\" image-name=\"{image_name}\"/>")
    return out

def main():
    assets = Path("./src/assets")
    countries = [x.name for x in assets.iterdir() if x.is_dir()]
    countries.remove("home")
    
    out = []
    for country in countries:
        lines = run_country(country)
        out.extend(lines)

    out = '\n'.join(out)
    print(out)


if __name__ == "__main__":
    main()